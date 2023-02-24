export interface IUploadFile {
  uploadPhoto(file: File): Promise<string>;
}
