import { AppError } from "../../../errors/AppError";
import { IPostDTO } from "../../../modules/Post/dtos/IPostDTO";

export class FieldValidation {
  async validate(data: IPostDTO): Promise<void> {
    if (data.title.length < 6) {
      throw new AppError("O campo de titulo deve ter no minimo 6 caracteres!");
    } else if (data.content.length < 6) {
      throw new AppError(
        "O conteudo do post deve ter no minimo 1000 caracteres!"
      );
    } else if (data.description.length < 6) {
      throw new AppError(
        "a descrição do post deve ter no minimo 200 caracteres!"
      );
    } else if (!data.thumbnail) {
      throw new AppError(
        "Favor, adicionar uma imagem para a thumbnail de seu post."
      );
    }
  }

  async postIsFromUser(data: IPostDTO, id: string): Promise<void> {
    if (data.user != id) {
      throw new AppError("Você só pode atualizar posts que são seus!");
    }
  }
}
