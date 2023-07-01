import './Test.css';
import { useState, useRef } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import a1 from "./image/a1.jpg"
import a2 from "./image/a2.jpg"
import a3 from "./image/a3.jpg"
import a4 from "./image/a4.jpg"
import a5 from "./image/a5.jpg"
const images = [
   a1,a2,a3,a4,a5
];
function Test() {
    const [img, setImg] = useState(images[0]);
    const hoverHandler = (image, i) => {
        setImg(image);
        refs.current[i].classList.add('active');
        for (var j = 0; j < images.length; j++) {
            if (i !== j) {
                refs.current[j].classList.remove('active');
            }
        }
    };
    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    return (
        <div className="containers">
            <div className="lefts">
                <div className="left_1">
                    {images.map((image, i) => (
                        <div
                            className={i == 0 ? 'img_wrap active' : 'img_wrap'}
                            key={i}
                            onMouseOver={() => hoverHandler(image, i)}
                            ref={addRefs}
                        >
                            <img src={image} alt="" />
                        </div>
                    ))}
                </div>
                <div className="left_2">
                    <ReactImageMagnify
                        {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: img,
                            },
                            largeImage: {
                                src: img,
                                width: 1200,
                                height: 1800,
                            },
                            enlargedImageContainerDimensions: {
                                width: '150%',
                                height: '150%',
                            },
                        }}
                    />
                </div>
            </div>
            <div className="rights"></div>
        </div>
    );
}

export default Test;