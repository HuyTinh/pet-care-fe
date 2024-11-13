import jsPDF from "jspdf";
import { amiriFont } from "./font-base64";

export const usePdfGenerator = () => {
  const generatePDF = (appointmentId: number) => {
    const pdf = new jsPDF();

    pdf.addFileToVFS("Amiri-Regular.ttf", amiriFont);
    pdf.addFont("Amiri-Regular.ttf", "Amiri", "normal");
    pdf.setFont("Amiri");

    const pageWidth = pdf.internal.pageSize.getWidth();

    const appointmentText = `#${appointmentId}`;
    const appointmentWidth = pdf.getTextWidth(appointmentText);
    const appointmentX = (pageWidth - appointmentWidth) / 2; // Tính toán vị trí x

    // Tiêu đề phiếu khám
    pdf.setFontSize(18);
    pdf.text("Pet Care Clinic - Appointment Form", 38, 20);

    pdf.setFontSize(16);
    pdf.text("-------------------- Information ----------------------", 10, 30);

    // Mã số khám
    pdf.setFontSize(12);
    pdf.text(`- ID: ${appointmentText}`, 40, 50);
    pdf.text(`- Date: ${appointmentDetails.date}`, 40, 60);
    pdf.text(`- Time: ${appointmentDetails.time}`, 40, 70);

    const image = new Image();
    image.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      appointmentId;

    pdf.addImage({
      imageData: image,
      x: appointmentX + 26,
      y: 40,
      width: 36,
      height: 36,
    });

    // Lưu PDF
    pdf.save("appointment.pdf");
  };

  // Ví dụ dữ liệu
  const appointmentDetails = {
    appointmentId: "A12345",
    date: "04/10/2024",
    time: "10:30 AM",
  };

  return { generatePDF };
};
