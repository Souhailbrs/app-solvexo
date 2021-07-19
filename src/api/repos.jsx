import axios from "axios";
export async function getRepos() {
    const response = await axios.get('https://api.github.com/search/repositories?q=%7Bjavascript%7D&sort=stars&order=desc');
    return response;
}
