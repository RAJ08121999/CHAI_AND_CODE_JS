const course={
    courseName:"JS in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

//course.courseInstructor

const {courseInstructor}=course;
console.log(courseInstructor);//hitesh

const {courseInstructor:instructor}=course;
console.log(instructor);//hitesh


