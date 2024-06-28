export default function Articles() {
  const items = [
    {
      title: "Phase 1 - Project Complete: 5 things I learned along the way!",
      link: "https://medium.com/@istafa.a.marshall/phase-1-project-complete-5-things-i-learned-along-the-way-c7de3da265a1",
      source: "medium.com",
      description:
        "Phase 1 project at Flatiron School, highlighting five key lessons learned during the process. It covers the importance of using Google for problem-solving, planning thoroughly, utilizing console.log for debugging, practicing patience, and the value of consistent practice to improve coding skills."
      ,
    },
    {
      title: "Phase 5 - Working with React and its advantages over Javascript",
      link: "https://medium.com/@istafa.a.marshall/working-with-react-and-its-advantages-over-javascript-8aca46efc92c",
      source: "medium.com",
      description:
        "Phase 2 project at Flatiron School, focusing on the advantages of using React over JavaScript for web development. It highlights React's features such as JSX, component-based architecture, and client-side routing, explaining how these tools streamline development and enhance user experience."
      ,
    },
    {
      title: "Phase 3 - Becoming a Full-Stack Developer",
      link: "https://medium.com/@istafa.a.marshall/phase-3-becoming-a-full-stack-developer-five-things-learned-e6c3b929c328",
      source: "medium.com",
      description:
        "Phase 3 of Flatiron School, where I transitioned from front-end to back-end development, learning to build server-side applications using Ruby and its associated libraries. The article highlights the development of my first full-stack project, a Gaming Todo List app, emphasizing the challenges and rewards of becoming a full-stack developer."
      ,
    },
    {
      title: "Phase 4 - Deploying my first API using Ruby on Rails",
      link: "https://medium.com/@istafa.a.marshall/phase-4-deploying-my-first-api-using-ruby-on-rails-19ab4ccc337b",
      source: "medium.com",
      description:
        "Phase 4 project at Flatiron School, where I developed my first API using Ruby on Rails to create an account and make restaurant reservations. The article covers key features like Rails generators, serializers, and authentication tools, highlighting how these components streamline development and enhance security."
      ,
    },
    {
      title: "Phase 5 Complete - Building the S.T.I.M.S App",
      link: "https://medium.com/@istafa.a.marshall/phase-5-complete-building-the-s-t-i-m-s-app-9d0cc598bdb8",
      source: "medium.com",
      description:
        "Phase 5 project at Flatiron School, where I developed the S.T.I.M.S (Student Teacher Integrated Management System) app, a comprehensive educational platform. The journey highlights my growth in software engineering, from initial programming interests in high school to overcoming technical challenges using Ruby on Rails, PostgreSQL, and React."
      ,
    },
  ];

  return (
    <section style={{marginTop:'20px'}}>
      <h2 className="font-inter-tight text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Articles
      </h2>
      <div className="space-y-1">
        {items.map((item, index) => (
          <article
            key={index}
            className="relative p-5 rounded-xl odd:bg-gradient-to-tr odd:from-gray-100 odd:to-gray-50 dark:odd:bg-gradient-to-tr dark:odd:from-gray-800 dark:odd:to-gray-800/[0.65] group"
          >
            <div
              className="absolute top-5 right-7 text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:rotate-45 transition"
              aria-hidden="true"
            >
              <svg
                className="fill-current opacity-80 dark:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
              >
                <path d="M1.018 10 0 8.983l7.572-7.575H1.723L1.736 0H10v8.266H8.577l.013-5.841L1.018 10Z" />
              </svg>
            </div>
            <div className="space-y-1.5 mb-2">
              <div className="text-[13px] font-medium text-gray-600 dark:text-gray-400">
                {item.source}
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                <a className="before:absolute before:inset-0" 
                href={item.link}
                aria-label="Medium"
                target="_blank"
                rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
