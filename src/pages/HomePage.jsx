import Hero from "../components/Section/Hero";
import TwoColumns from "../components/Section/TwoColumns";
import Blog from '../components/Section/blog/BlogHome'


const cleandesign = 'https://png.pngtree.com/recommend-works/png-clipart/20240716/ourmid/pngtree-efficient-task-management-the-checklist-approach-png-image_13090979.png';
const wellorganised = 'https://simg.nicepng.com/png/small/262-2627733_4-time-management-tips-for-social-media-managers.png'

const HomePage = () => {

    return (
        <>
            <Hero />
            <TwoColumns 
                title="Clean and Modern Design" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
                button={{
                label: "Learn More",
                url: '#',
                }}
                image={cleandesign}
                />
            <TwoColumns 
                title="Well Organized Layer" description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
                button={{
                label: "Learn More",
                url: '#',
                }}
                image={wellorganised}
                />
            <Blog />
        </>
    )
}
export default HomePage;