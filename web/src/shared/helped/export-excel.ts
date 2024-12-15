import * as XLSX from "xlsx";

/**
 * Hàm xuất file Excel
 * @param tableId ID của bảng HTML (nếu có) hoặc truyền trực tiếp header và data
 * @param data Dữ liệu cần xuất
 * @param headerMapping Mapping từ tên thuộc tính gốc sang tên hiển thị
 * @param filename Tên file xuất ra
 */
export const exportExcel = (
  tableId: string | null,
  data: any[],
  headerMapping?: { [key: string]: string }, // Mapping để đổi tên header hiển thị
  filename: string = "exported_file.xlsx",
) => {
  let tableHeader: string[] = [];
  let displayHeader: string[] = [];

  // Nếu tableId được cung cấp, lấy header từ bảng HTML
  if (tableId) {
    const tableElement = document.getElementById(tableId);
    if (tableElement) {
      const headerElements = tableElement.querySelectorAll("th");
      tableHeader = Array.from(headerElements).map((th) => th.innerText.trim());
    }
  }

  // Nếu không có tableId, dùng headerMapping truyền vào (nếu có)
  if (headerMapping) {
    tableHeader = Object.keys(headerMapping); // Tên thuộc tính gốc
    displayHeader = Object.values(headerMapping); // Tên hiển thị
  }

  // Nếu không có headerMapping và không tìm thấy header từ tableId, lấy header từ thuộc tính của data
  if (tableHeader.length === 0 && data.length > 0) {
    tableHeader = Object.keys(flattenObject(data[0])); // Thuộc tính gốc
    displayHeader = tableHeader; // Nếu không có headerMapping, dùng thuộc tính gốc làm header hiển thị
  }

  // Chuẩn bị dữ liệu cho Excel
  const formattedData = data.map((row) => {
    const rowData: { [key: string]: any } = {};
    const flattenedRow = flattenObject(row); // Làm phẳng đối tượng

    // Gán dữ liệu vào từng cột dựa trên tableHeader
    tableHeader.forEach((col) => {
      rowData[headerMapping?.[col] || col] =
        flattenedRow[col] !== undefined ? flattenedRow[col] : ""; // Sử dụng headerMapping nếu có
    });

    return rowData;
  });

  // Tạo worksheet từ dữ liệu đã format
  const ws = XLSX.utils.json_to_sheet(formattedData, { header: displayHeader });

  // Định dạng header: in đậm
  const range = XLSX.utils.decode_range(ws["!ref"] || ""); // Lấy phạm vi sheet
  for (let C = range.s.c; C <= range.e.c; C++) {
    const cellAddress = XLSX.utils.encode_cell({ r: 0, c: C }); // Lấy địa chỉ ô header
    if (!ws[cellAddress]) continue; // Bỏ qua ô rỗng
    if (!ws[cellAddress].s) ws[cellAddress].s = {}; // Nếu chưa có style, khởi tạo
    ws[cellAddress].s = {
      font: { bold: true }, // In đậm header
      alignment: { horizontal: "center", vertical: "center" }, // Căn giữa
    };
  }

  // Định dạng dữ liệu: căn đều dữ liệu
  for (let R = range.s.r + 1; R <= range.e.r; R++) {
    for (let C = range.s.c; C <= range.e.c; C++) {
      const cellAddress = XLSX.utils.encode_cell({ r: R, c: C }); // Lấy địa chỉ ô
      if (!ws[cellAddress]) continue; // Bỏ qua ô rỗng
      if (!ws[cellAddress].s) ws[cellAddress].s = {}; // Nếu chưa có style, khởi tạo
      ws[cellAddress].s = {
        alignment: { horizontal: "center", vertical: "center" }, // Căn giữa dữ liệu
      };
    }
  }

  // Tạo workbook từ worksheet
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  // Xuất file Excel với tên đã chỉ định
  XLSX.writeFile(wb, filename);
};

/**
 * Hàm làm phẳng (flatten) một đối tượng, bao gồm các thuộc tính con và mảng
 * Ví dụ: { manufacture: { name: 'Alkin' }, locations: [{area: 'A', row_location: 1}, {...}] }
 * => { 'manufacture.name': 'Alkin', 'locations[0].area': 'A', 'locations[0].row_location': 1 }
 */
const flattenObject = (
  obj: any,
  prefix: string = "",
): { [key: string]: any } => {
  let result: { [key: string]: any } = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (Array.isArray(obj[key])) {
        // Nếu là mảng, cần làm phẳng từng phần tử của mảng
        obj[key].forEach((item: any, index: number) => {
          Object.assign(result, flattenObject(item, `${newKey}[${index}]`));
        });
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        // Nếu là đối tượng, tiếp tục làm phẳng
        Object.assign(result, flattenObject(obj[key], newKey));
      } else {
        // Nếu là giá trị nguyên thủy, thêm vào kết quả
        result[newKey] = obj[key];
      }
    }
  }
  return result;
};
