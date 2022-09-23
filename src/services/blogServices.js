import axios from "axios";

class blogServices {
  static getBlogs() {
    return axios.get("http://localhost:5000/blogovi");
  }
  static getBlogByid(id) {
    return axios.get(`http://localhost:5000/blogovi/${id}`);
  }
  static uploadBlog(body) {
    return axios.post(`http://localhost:5000/blogovi/dodajblog/uspesno`, body);
  }
  static uploadComment(id, body) {
    return axios.post(
      `http://localhost:5000/blogovi/${id}/objavikomentar`,
      body
    );
  }
  static getComments(id) {
    return axios.get(`http://localhost:5000/blogovi/komentari/${id}`);
  }
  static adminLogin(body) {
    return axios.post(`http://localhost:5000/admin/login/uspesno`, body);
  }
  static editBlogByid(id) {
    return axios.get(`http://localhost:5000/blogovi/editujblog/${id}`);
  }
  static editComments(id) {
    return axios.get(
      `http://localhost:5000/blogovi/editujblog/komentari/${id}`
    );
  }
  static editUploadedBlog(id, body) {
    return axios.post(
      `http://localhost:5000/blogovi/editujblog/azuriraj/${id}`,
      body
    );
  }
  static deleteBlog(id) {
    return axios.delete(
      `http://localhost:5000/blogovi/editujblog/izbrisi/${id}`
    );
  }
  static deleteComment(id, commentMail) {
    return axios.post(
      `http://localhost:5000/blogovi/editujblog/izbrisi/komentar/${id}`,
      commentMail
    );
  }
  static existingComment(id) {
    return axios.get(
      `http://localhost:5000/blogovi/editujblog/postojeci/${id}`
    );
  }
  static sendContact(body) {
    return axios.post(`http://localhost:5000/kontakti/posalji`, body);
  }
  static getContacts() {
    return axios.get(`http://localhost:5000/prikazikontakte/kontakti`);
  }
  static deleteContact(id) {
    return axios.delete(
      `http://localhost:5000/prikazikontakte/kontakti/izbrisi/${id}`
    );
  }
  static getImgName() {
    return axios.get(`http://localhost:5000/galerija/uzmisliku`);
  }
}
export default blogServices;
