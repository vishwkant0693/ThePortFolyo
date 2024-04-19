import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Testimonial from '../components/Testimonial';
import Contact from '../components/Contact';
import { AnimatePresence } from 'framer-motion';

function Home() {
    const location = useLocation();
    const params = useParams();
    const navigate = useNavigate();

    const userId = '65b3a22c01d900e96c4219ae'; //John doe

    const BASE_URL = 'https://portfolio-backend-30mp.onrender.com/api/v1';

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        document.cookie = `portfolio-name=portfolio1`;
        const fetchUserData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/get/user/${params?.user ?? userId}`);

                const userData = await response.json();

                document.title = `${userData?.user?.about?.name + ' - ' + userData?.user?.about?.title}`;
                setUser(userData?.user);
                setIsLoading(false);
                document.body.classList.remove('loaded');
            } catch (error) {
                navigate('/');
                setIsLoading(true);
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [params?.user, userId, navigate]);
    console.log(user);


    // filtering all the data from the API
    const sortedFilteredSkills = user?.skills?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const sortedFilteredProject = user?.projects?.filter((item) => item.enabled)?.sort((a, b) => a.sequence - b.sequence);
    const filteredServices = user?.services?.filter((item) => item.enabled);
    const filteredTestimonials = user?.testimonials?.filter((item) => item.enabled);
    const filteredSocialHandles = user?.social_handles?.filter((item) => item.enabled);
    const filteredEducation = user?.timeline?.filter((item) => item.forEducation && item.enabled);
    const filteredExperience = user?.timeline?.filter((item) => !item.forEducation && item.enabled);

    if (isLoading) {
        return <div className="w-full h-screen bg-black flex items-center justify-center text-center">Loading..</div>;
    }
    return (
        <>
            <AnimatePresence initial={true} mode='wait' >
                <Routes key={location.pathname} location={location}>
                    <Route path="/" element={<Hero data={user} />} />
                    <Route path="/about" element={<About data={user} />} />
                    <Route path="/skills" element={<Skills data={sortedFilteredSkills} />} />
                    <Route path="/projects" element={<Projects data={sortedFilteredProject} />} />
                    <Route path="/timeline" element={<Timeline data={user} />} />
                    <Route path="/testimonial" element={<Testimonial data={filteredTestimonials} />} />
                    <Route path="/contact" element={<Contact data={filteredSocialHandles} email={user} />} />
                    <Route path="/services" element={<Services data={filteredServices} />} />
                    {/* <Route path="/:user" element={<Home />} /> */}
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default Home;
