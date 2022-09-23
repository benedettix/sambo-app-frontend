import axios from "axios";

class blogServices {
  static getBlogs() {
    return axios.get("https://sambo-klub-neretva.herokuapp.com/blogovi");
  }
  static getBlogByid(id) {
    return axios.get(`https://sambo-klub-neretva.herokuapp.com/blogovi/${id}`);
  }
  static uploadBlog(body) {
    return axios.post(
      `https://sambo-klub-neretva.herokuapp.com/blogovi/dodajblog/uspesno`,
      body
    );
  }
  static uploadComment(id, body) {
    return axios.post(
      `https://sambo-klub-neretva.herokuapp.com/blogovi/${id}/objavikomentar`,
      body
    );
  }
  static getComments(id) {
    return axios.get(
      `https://sambo-klub-neretva.herokuapp.com/blogovi/komentari/${id}`
    );
  }
  static adminLogin(body) {
    return axios.post(
      `https://sambo-klub-neretva.herokuapp.com/admin/login/uspesno`,
      body
    );
  }
  static editBlogByid(id) {
    return axios.get(
      `https://sambo-klub-neretva.herokuapp.com/blogovi/editujblog/${id}`
    );
  }
  static editComments(id) {
    return axios.get(
      `https://sambo-klub-neretva.herokuapp.com/blogovi/editujblog/komentari/${id}`
    );
  }
  static editUploadedBlog(id, body) {
    return axios.post(
      `https://sambo-klub-neretva.herokuapp.com/blogovi/editujblog/azuriraj/${id}`,
      body
    );
  }
  static deleteBlog(id) {
    return axios.delete(
      `https://sambo-klub-neretva.herokuapp.com/blogovi/editujblog/izbrisi/${id}`
    );
  }
  static deleteComment(id, commentMail) {
    return axios.post(
      `https://sambo-klub-neretva.herokuapp.com/blogovi/editujblog/izbrisi/komentar/${id}`,
      commentMail
    );
  }
  static existingComment(id) {
    return axios.get(
      `https://sambo-klub-neretva.herokuapp.com/blogovi/editujblog/postojeci/${id}`
    );
  }
  static sendContact(body) {
    return axios.post(
      `https://sambo-klub-neretva.herokuapp.com/kontakti/posalji`,
      body
    );
  }
  static getContacts() {
    return axios.get(
      `https://sambo-klub-neretva.herokuapp.com/prikazikontakte/kontakti`
    );
  }
  static deleteContact(id) {
    return axios.delete(
      `https://sambo-klub-neretva.herokuapp.com/prikazikontakte/kontakti/izbrisi/${id}`
    );
  }
  static getImgName() {
    return axios.get(
      `https://sambo-klub-neretva.herokuapp.com/galerija/uzmisliku`
    );
  }
}
export default blogServices;
