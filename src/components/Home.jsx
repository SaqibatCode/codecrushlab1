import React from 'react';
import Header from './partials/Header/header'
import Footer from './partials/footer';
import HeroPage from './partials/HomePagePartials/HeroPage';
import ArticleBox from './partials/partials/ArticleBox';
import MoreArticle from './partials/partials/MoreArticle';
import Popup from './partials/partials/popup';
function Home() {
    return (
        <div style={{ background: '#F9FCFF' }}>
            <Header />
            <HeroPage />
            <div className="articleContainer">
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
            </div>
            <div className="articleContainer">
                <ArticleBox />
                <ArticleBox />
                <ArticleBox />
            </div>
            <div className='text-center'>
                <MoreArticle />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
