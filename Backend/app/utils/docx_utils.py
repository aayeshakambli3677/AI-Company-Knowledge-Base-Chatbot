from docx import Document


class DOCXUtils:
    """
    Utility class for extracting text from DOCX files.
    """

    @staticmethod
    def extract_text(docx_path: str) -> str:
        """
        Extract text from a DOCX file.

        Args:
            docx_path (str): Path to the DOCX file.

        Returns:
            str: Extracted text.
        """
        try:
            document = Document(docx_path)

            text = []

            for paragraph in document.paragraphs:
                if paragraph.text.strip():
                    text.append(paragraph.text)

            return "\n".join(text)

        except Exception as e:
            raise Exception(f"Error reading DOCX file: {e}")


# ---------------------------------
# Example Usage
# ---------------------------------
if __name__ == "__main__":

    file_path = "sample.docx"   # Replace with your DOCX file

    try:
        extracted_text = DOCXUtils.extract_text(file_path)

        print("Extracted Text:")
        print(extracted_text)

    except Exception as e:
        print(e)