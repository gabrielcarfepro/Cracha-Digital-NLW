const LinksSocialMedia = {
  github: 'gabrielcarfe',
  youtube: 'channel/UC8xx3Niv9Yv4wgh91MaLNUQ',
  facebook: '',
  instagram: '',
  twitter: ''
}

function ModifySocialMediaLinks() {
  // document.getElementById('userName').textContent = 'Gabriel Ferreira'

  userName.textContent = 'Gabriel Ferreira'

  for (let li of SocialLinks.children) {
    // ou SocialLinks.textContent
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

ModifySocialMediaLinks()
