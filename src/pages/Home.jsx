import React from 'react';
import Hero from '../components/Hero';
import ProductList from '../components/ProductList';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <>
            <Hero />
            <ProductList />
            <ContactForm />
        </>
    );
};

export default Home;