import ApiEndpoint from "./ApiEndpoint";

export default class NoteService extends ApiEndpoint {
  async getAllNotes() {
    const client = await this.getClient();
    const response = await client.get("/notes");
    return response.data;
  }

  async createNote(noteText) {
    const client = await this.getClient();
    const response = await client.post("/notes", {
      title: noteText
    });
    return response.data;
  }

  async getNoteById(id) {
    const client = await this.getClient();
    const response = await client.get(`/notes/${id}`);
    return response.data;
  }

  async updateNote(id, noteText) {
    const client = await this.getClient();
    const response = await client.put(`/notes/${id}`, {
      title: noteText
    });
    return response.data;
  }

  async deleteNote(id) {
    const client = await this.getClient();
    const response = await client.delete(`/notes/${id}`);
    return response.data;
  }
}
