import React from 'react';
import { Collapse } from 'antd';
import './sections.css'; // Import your styles

const { Panel } = Collapse;

const Question = () => {
    const items = [
        {
            key: '1',
            label: 'Вы доставляете по всей России?',
            children: <p>Да, мы доставляем по всей России.</p>,
        },
        {
            key: '2',
            label: 'А на бумаге печатаете?',
            children: <p>Да, печатаем на бумаге различных форматов.</p>,
        },
        {
            key: '3',
            label: 'Можно сделать принт на своей вещи?',
            children: <p>Конечно, вы можете принести свою вещь для печати.</p>,
        },
        {
            key: '4',
            label: 'Как быстро сможете произвести заказ?',
            children: <p>Сроки зависят от объема, обычно 1-3 дня.</p>,
        },
        {
            key: '5',
            label: 'Можно заказать одну какую-то позицию?',
            children: <p>Да, вы можете заказать даже одну позицию.</p>,
        },
        {
            key: '6',
            label: 'Из-за границы можно заказать?',
            children: <p>Да, заказы из-за границы принимаем.</p>,
        },
        {
            key: '7',
            label: 'Можно организовать самовывоз?',
            children: <p>Да, самовывоз доступен по договоренности.</p>,
        },
        {
            key: '8',
            label: 'А если я не юр лицо, будем сотрудничать?',
            children: <p>Конечно, мы работаем с физическими лицами.</p>,
        },
    ];

    return (
        <section className="question">
            <div className="question_title">
                <h1>Часто задаваемые <br /> <span className="under_line">вопросы</span></h1>
            </div>

            <div className="question_box">
                <div className="question_left">
                    <Collapse accordion expandIconPosition="end" className="custom-collapse">
                        {items.slice(0, 4).map(item => (
                            <Panel header={item.label} key={item.key}>
                                {item.children}
                            </Panel>
                        ))}
                    </Collapse>
                </div>
                <div className="question_right">
                    <Collapse accordion expandIconPosition="end" className="custom-collapse">
                        {items.slice(4).map(item => (
                            <Panel header={item.label} key={item.key}>
                                {item.children}
                            </Panel>
                        ))}
                    </Collapse>
                </div>
            </div>
        </section>
    );
};

export default Question;
