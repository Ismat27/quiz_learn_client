import Courses from "../components/Courses"
import { courses as tempdata } from "../data/course"
import styled from "styled-components"
import { useState } from "react"


const Skill = () => {
  
  const tempCategory = tempdata.map(item => item.category)
  const [currentCourses, setCurrentCourses] = useState([...tempdata])

  function filterCourses(category) {
    if (category === 'all') {
      setCurrentCourses([...tempdata])
    }
    else {
      let data = tempdata.filter(item => item.category === category)
      setCurrentCourses(data)
    }
  }

  return (
    <Wrapper className="capitalize">

      <div className="section-header">
        <h1 className="section-title">explore your prefered course</h1>
        <div className="info">
          <p className="section-info">choose your favorite course to acquire, and be the best in your niche.</p>
          <select onChange={(event) => filterCourses(event.target.value)} className="capitalize">
            <option 
              value={'all'}
            >
              all courses
            </option>
            {
              tempCategory.map(item => {
                return (
                  <option
                    key={item}
                    value={item}
                    >
                  {item}
                  </option>
                )
              })
            }
          </select>
        </div>
      </div>
      {
        currentCourses.map((data) => {
          return (
            <Courses 
              key={data.category}
              data={data}
            />
          )
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding-block: 1rem;
.section-title {
  margin-bottom: 2rem;
}
.info {
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 1rem;
}
.section-info {
  margin-top: 0;
  max-width: 400px;
}
select {
  border: none;
  outline: none;
  font-weight: 700;
  font-size: 1rem;
}
@media (min-width: 576px) {
  
}
@media (min-width: 768px) {

}
@media (min-width: 992px) {
  padding-block: 2rem;
}
`

export default Skill
