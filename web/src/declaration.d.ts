// react-qr-scanner.d.ts
declare module "react-qr-scanner" {
    import { ComponentType } from "react";

    // Define the type of the component if necessary (adjust the types as per the library's API)
    interface QRScannerProps {
        onScan: (data: string) => void; // Adjust this based on the actual event data type
        onError: (error: any) => void;
        // Add any other props you need based on the documentation or your inspection of the library
    }

    const QRScanner: ComponentType<QRScannerProps>;

    export default QRScanner;
}
