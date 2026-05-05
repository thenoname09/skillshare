

export async function getCourses() {
    const res =  await fetch("https://skillshare-umber.vercel.app/data.json",{
  cache: "no-store",
})
    const courses = await res.json()
    return courses
}