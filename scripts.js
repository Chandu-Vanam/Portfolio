const projectLinks = [
    {
        liveLink:'https://chandu-vanam.github.io/FAQ-Reactjs/',
        repoLink:'https://github.com/Chandu-Vanam/FAQ-Reactjs',
        heading:'FAQ - Accordiannnn'
    },
    {
        liveLink:'https://chandu-vanam.github.io/Image-slider/',
        repoLink:'https://github.com/Chandu-Vanam/Image-slider',
        heading:'Image Slider'
    },
    {
        liveLink:'https://chandu-vanam.github.io/Todo-Js/',
        repoLink:'https://github.com/Chandu-Vanam/Todo-Js',
        heading:'Todo App'
    },
    {
        liveLink:'https://chandu-vanam.github.io/Form-Validation/',
        repoLink:'https://github.com/Chandu-Vanam/Form-Validation',
        heading:'Form Validation'
    },
    {
        liveLink:'https://chandu-vanam.github.io/Classic-Clock/',
        repoLink:'https://github.com/Chandu-Vanam/Classic-Clock',
        heading:'Classic Clock'
    },
    {
        liveLink:'https://chandu-vanam.github.io/Calculator-js/',
        repoLink:'https://github.com/Chandu-Vanam/Calculator-js',
        heading:'Calculator'
    },
];

const boxContent = document.querySelectorAll('.project-box');

// console.log(boxContent[0].children)
// console.log(boxContent[0].children[0].innerHTML)

for(let i=0;i<boxContent.length;i++){
    
    boxContent[i].children[0].innerText = projectLinks[i].heading;
    boxContent[i].children[1].href = projectLinks[i].liveLink;
    boxContent[i].children[2].href = projectLinks[i].repoLink;
}

const certificateSlider = () => {

    const getCertificateImg = document.getElementById('certificateImage');
    const getLeftArrow = document.getElementById('left-arrow');
    const getRightArrow = document.getElementById('right-arrow');
    let curCertificateIndex = 0;

    const certificatesLinks = [
        {
            heading: 'GFG - DSA',
            source: "./images/certificates/dsa-gfg.png"
        },
        {
            heading: 'UDEMY - DSA',
            source: "./images/certificates/dsa-udemy.jpg"
        },
        {
            heading: 'HACKER RANK - DSA',
            source: "./images/certificates/hackerrank.png"
        }
    ]

    const slideLeft = () => {
        curCertificateIndex = (curCertificateIndex - 1 + certificatesLinks.length) % certificatesLinks.length;
        getCertificateImg.src = certificatesLinks[curCertificateIndex].source;
    };
    getLeftArrow.addEventListener('click', slideLeft);

    const slideRight = () => {
        curCertificateIndex = (curCertificateIndex + 1) % certificatesLinks.length;
        getCertificateImg.src = certificatesLinks[curCertificateIndex].source;
    };
    getRightArrow.addEventListener('click', slideRight);

    getCertificateImg.src = certificatesLinks[curCertificateIndex].source;
}
certificateSlider();

