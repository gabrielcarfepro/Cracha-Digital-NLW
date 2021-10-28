const LinksSocialMedia = {
  github: 'gabrielcarfepro',
  youtube: 'channel/UC8xx3Niv9Yv4wgh91MaLNUQ',
  facebook: '',
  instagram: '',
  twitter: ''
}

function modifySocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Gabriel Ferreira'

  userName.textContent = 'Gabriel Ferreira'

  for (let li of SocialLinks.children) {
    // ou SocialLinks.textContent
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

modifySocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      //userAvatar.src = data.avatar_url
      githubUserUrl.href = data.html_url
      githubUserName.textContent = data.login
    })
  //Promise "é uma promessa" de pegar algo -> .then
}

getGitHubProfileInfos()
