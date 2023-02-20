export class GitHubUser {
  static search(username) {
    const endpoint = `https://api.github.com/users/${username}`

    return fetch(endpoint)
    .then(data => data.json())
    .then(data => {
      return {
        login: data.login,
        name: data.name,
        public_repos: data.public_repos,
        followers: data.followers
      }
    })
  }
}