import React from 'react';
import project_info_img from '../../assets/Home/project-info-img.svg';

const ProjectInfo = () => {
    return (
        <div className="container project-info-container">
            <div className="row">
                <div className="col-lg-6 project-info-col">
                    <div className='project-info-content'>
                        <h1>Ataköy-İkitelli</h1>
                        <span></span>
                        <h4>PROJE BİLGİSİ</h4>
                        <p>
                            13,4 km uzunluğundaki Ataköy - İkitelli Metro Hattı, İstanbul’un batı yakasındaki bölgeleri, 
                            kuzeyden güneye birbirine bağlayacaktır. Bakırköy, Bahçelievler, Bağcılar, Küçükçekmece ve 
                            Başakşehir olmak üzere 5 ayrı ilçeyi raylı sistem ile bağlayarak İstanbul halkına hizmet edecektir. 
                            Proje, hattı kullananların Ataköy’den İkitelli’ye 19 dakikada ulaşmalarını sağlayacaktır.
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                    <img className='img-fluid' src={project_info_img} alt="project-info-img" />
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;