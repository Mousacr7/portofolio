import { useEffect, useRef } from 'react';

const skills = [
  { name: 'HTML5', percent: 90 },
  { name: 'CSS3 (Flexbox, Grid, Animations)', percent: 75 },
  { name: 'JavaScript (ES6+)', percent: 70 },
  { name: 'React (Hooks, JSX)', percent: 60 },
  { name: 'APIs (REST, Axios)', percent: 70 },
  { name: 'Git & GitHub', percent: 70 },
];


const Main = () => {
  const circlesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-fill'), 10);

          if (entry.isIntersecting) {
            let current = 0;
            const animate = () => {
              if (current <= target) {
                const deg = (current / 100) * 360;
                el.style.background = `conic-gradient(#112240 0deg ${deg}deg, #eee ${deg}deg 360deg)`;
                el.querySelector('.percent').textContent = `${current}%`;
                current++;
                requestAnimationFrame(animate);
              }
            };
            animate();
          } else {
            // Reset circle when it goes out of view
            el.style.background = `conic-gradient(#112240 0deg, #eee 0deg 360deg)`;
            el.querySelector('.percent').textContent = `0%`;
          }
        });
      },
      { threshold: 0.5 }
    );

    circlesRef.current.forEach(circle => {
      if (circle) observer.observe(circle);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="skil">
      <div className="cards">
        {skills.map((skill, index) => (
          <div className="card" key={index}>
            <span className="skill">{skill.name}</span>
            <div
              className="progress-circle"
              data-fill={skill.percent}
              ref={el => (circlesRef.current[index] = el)}
            >
              <div className="percent">0%</div>
            </div>
          </div>
        ))}
      </div>

    
    </main>
  );
};

export default Main;
