

export async function getCourses() {
    const res =  await fetch("https://skillshare-umber.vercel.app/data.json")
    const courses = await res.json()
    return courses
}