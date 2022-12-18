import Courses from "../components/Courses"
import { courses as tempdata } from "../data/course"
import styled from "styled-components"


const Skill = () => {
  return (
    <Wrapper>
      <Courses 
        data={tempdata[0]}
      />
      <Courses 
        data={tempdata[1]}
      />
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-block: 1rem;
@media (min-width: 576px) {
  
}
@media (min-width: 768px) {

}
@media (min-width: 992px) {
  padding-block: 2rem;
}
`

export default Skill
