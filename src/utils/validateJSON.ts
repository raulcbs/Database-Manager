import { Data } from "@/types";

export function validateJSON(jsonData: string) {
  try {
    const parsedData: Data = JSON.parse(jsonData);

    // Verificar que el objeto tenga la propiedad "users" de tipo arreglo
    if (!Array.isArray(parsedData.users)) {
      throw new Error('El formato JSON no es el adecuado')
    }

    // Verificar la estructura de cada usuario
    for (const user of parsedData.users) {
      if (
        typeof user.email !== 'string' ||
        typeof user.name !== 'string' ||
        typeof user.profile !== 'object' ||
        typeof user.profile.bio !== 'string' ||
        !Array.isArray(user.posts) ||
        user.posts.some(
          (post) =>
            typeof post.title !== 'string' ||
            typeof post.content !== 'string' ||
            typeof post.published !== 'boolean'
        )
      ) {
        throw new Error('La estructura de los datos del usuario no es la adecuada')
      }
    }
  } catch (error) {
    throw new Error('Error al parsear el JSON')
  }
}