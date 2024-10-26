import React, { useState, useEffect } from 'react';
import './bottom.css'

export default function CoruselBottom() {
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        // Retrieve saved tab from localStorage on component mount
        const savedTab = localStorage.getItem('activeTab');
        if (savedTab) {
            setActiveTab(savedTab);
        }
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        localStorage.setItem('activeTab', tab); // Save active tab to localStorage
    };

    return (
        <div className="container">
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
                    onClick={() => handleTabClick('description')}
                >
                    Описание
                </button>
                <button
                    className={`tab-button ${activeTab === 'files' ? 'active' : ''}`}
                    onClick={() => handleTabClick('files')}
                >
                    Файлы
                </button>
            </div>

            <div className="content">
                {activeTab === 'description' && (
                    <div className="description">
                        <p>Противоположная точка зрения подразумевает, что ключевые особенности структуры проекта представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть ассоциативно распределены по отраслям. С другой стороны, дальнейшее развитие различных рассуждений! Модель организационной деятельности однозначно фиксирует необходимость направлений прогрессивного развития.</p>
                        <p>С другой стороны, дальнейшее развитие различных рассуждений! Модель организационной деятельности однозначно фиксирует необходимость направлений прогрессивного развития.</p>
                        <div className="details">
                            <div>
                                <strong>Размеры:</strong>
                                <span>950x81x81 мм</span>
                            </div>
                            <div>
                                <strong>Материал:</strong>
                                <span>Керамика</span>
                            </div>
                            <div>
                                <strong>Область нанесения:</strong>
                                <span>205х75 мм</span>
                            </div>
                            <div>
                                <strong>Вес:</strong>
                                <span>361 гр</span>
                            </div>
                        </div>
                    </div>
                )}
                {activeTab === 'files' && (
                    <div className="files">
                        <p>Здесь могут быть файлы для скачивания.</p>
                    </div>
                )}
            </div>
        </div>
    );
}


