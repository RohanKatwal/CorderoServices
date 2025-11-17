import { statsContent } from "@/constants";
import { pageName } from "./HeroSection";

const Stats = ({pageName}: pageName) => {
  const data = statsContent[pageName];
    return (
      <section className="stats">
        <div className="stats-content container">
          {data.map(item => (
              <div className="stat-item" key={item.id}>
                <div className={`${pageName === "corderoservices" ? "lastStats" : ""} stat-number`}>{item.value}</div>
                <div className="stat-label">{item.title}</div>
              </div>
          ))}
        </div>
      </section>
    );
}
 
export default Stats;