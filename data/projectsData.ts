interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: '少数派写作| P人的时间管理实践',
    description: `How do we overcome procratination`,
    imgSrc: '/static/images/productive.png',
    href: 'https://sspai.com/post/95280',
  },

  {
    title: 'Pelicanflow | My urbanist toolbox',
    description: `Pelicanflow is a platform where I document my latest toolkit for urban design and urban data analysis.`,
    imgSrc: '/static/images/pelicanflow.jpg',
    href: 'https://pelicanflowspace.vercel.app/',
  },
]

export default projectsData
