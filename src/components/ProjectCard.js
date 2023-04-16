import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, children }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {children}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
