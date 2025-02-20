import './companyLinks.scss'

export const CompanyLinks = () => {
    const links = [
        {
            id: 1,
            title: 'название компании',
        },
        {
            id: 2,
            title: 'название компании компашки',
        },
        {
            id: 3,
            title: 'название компании',
        },
        {
            id: 4,
            title: 'название компании компашки',
        },
        {
            id: 5,
            title: 'название компании',
        },
    ]
    return (
        <div className='container'>
            <div className="links">
                <div className="row">
                    {
                        links.map((item, index) => (
                            <button className='links-btn' key={index}>
                                <p className='links-btn-text'>{item.title}</p>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
