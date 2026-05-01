import Banner from "@/components/Banner";
import LearningTips from "@/components/LearningTips";
import PopularCourses from "@/components/PopularCourses";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularCourses></PopularCourses>
      <LearningTips></LearningTips>
    </div>

  );
}
