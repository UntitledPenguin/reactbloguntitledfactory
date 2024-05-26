interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Python小项目|A Sudoku Solver',
    description: `A high-performance Sudoku solver utilizing Depth-First Search (DFS) and hash tables.Running time listed among top 1% on Leetcode. Click to take a look`,
    imgSrc: '/static/images/Sudoku.jpg',
    href: '/blog/W302-Sudoku',
  },
  {
    title: 'A Computational Workflow for urban planning project data management',
    description: `See the exploration of using Rhino and Grasshopper in my work as a masterplanner.`,
    imgSrc: '/static/images/workflow.jpg',
    href: 'https://www.linkedin.com/posts/jiaqi-wang-ramis_grasshopper-rhino-urbanplanningworkflow-activity-7199515469085638656-3a_Y?utm_source=share&utm_medium=member_desktop',
  },
]

export default projectsData
