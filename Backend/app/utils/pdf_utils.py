import fitz  # PyMuPDF


class PDFUtils:
    """
    Utility class for extracting text from PDF files.
    """

    @staticmethod
    def extract_text(pdf_path: str) -> str:
        """
        Extract all text from a PDF file.

        Args:
            pdf_path (str): Path to the PDF file.

        Returns:
            str: Extracted text.
        """
        try:
            document = fitz.open(pdf_path)
            text = ""

            for page in document:
                text += page.get_text()

            document.close()

            return text.strip()

        except Exception as e:
            raise Exception(f"Error reading PDF file: {e}")


# ----------------------------
# Example Usage
# ----------------------------
if __name__ == "__main__":

    pdf_path = "sample.pdf"   # Replace with your PDF file path

    try:
        text = PDFUtils.extract_text(pdf_path)

        print("Extracted Text:")
        print(text[:1000])  # Print first 1000 characters

    except Exception as e:
        print(e)