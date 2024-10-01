import jsPDF from "jspdf";
import { amiriFont } from "./font-base64";

export const usePdfGenerator = () => {
  const generatePDF = (appointmentId: number) => {
    const pdf = new jsPDF();

    pdf.addFileToVFS("Amiri-Regular.ttf", amiriFont);
    pdf.addFont("Amiri-Regular.ttf", "Amiri", "normal");
    pdf.setFont("Amiri");

    // Thêm tiêu đề
    pdf.setFontSize(12);
    // Thêm số phòng

    // Thêm tiêu đề
    // pdf.text("Thông tin cuộc hiển", 10, 10);
    const pageWidth = pdf.internal.pageSize.getWidth();
    // Thêm số cuộc hẹn
    // Thêm số cuộc hẹn và căn giữa
    pdf.setFontSize(18);
    const appointmentText = `#${appointmentId}`;
    const appointmentWidth = pdf.getTextWidth(appointmentText);
    const appointmentX = (pageWidth - appointmentWidth) / 2; // Tính toán vị trí x
    pdf.text(appointmentText, appointmentX, 10); // Vị trí y = 50

    // pdf.setFontSize(14);
    // pdf.text(`Room number: ${3}`, appointmentX - 50, 20);

    var image = new Image();
    image.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      appointmentId;

    pdf.addImage({
      imageData: image,
      x: appointmentX - 10,
      y: 20,
      width: 32,
      height: 32,
    });

    // Lưu PDF
    pdf.save("appointment.pdf");
  };

  return { generatePDF };
};
