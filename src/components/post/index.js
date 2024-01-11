import FbImageLibrary from 'react-fb-image-grid';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

import likeIcon from '../../like.png';
import likedIcon from '../../liked.png';
import comment from '../../chat.png';
import share from '../../share.png';
import upperLike from '../../Upper-like.png';
import heart from '../../heart.png';
import care from '../../care.png';
import haha from '../../haha.png';
import wow from '../../wow.png';
import sad from '../../fear.png';
import angry from '../../angry.png';

function FBfeed(props) {
    const [like, setLike] = useState(false);
    const [isHoverd, setIsHoverd] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [saveImg, setSaveImg] = useState(null);
    const [saveImgName, setSaveImgName] = useState(null);

    function handleChange(src, name) {
        setSaveImg(src);
        setSaveImgName(name);
    }

    function inputHandle() {
        setIsClicked(!isClicked);
    }

    const {title, description, image, img} = props
 
    return (
        <div>
            <div className='main_div'>
                <div>
                    <div className='title_div'>
                        <img src={img} className='logo_img' />
                        <h4 className='neither title'>{title}</h4>
                    </div>
                    <h4 className='neither description'>{description}.</h4>
                </div>

                <div className='img_library'>
                    <FbImageLibrary images={image} />
                </div>
                <div className='bottom_div'>
                    {/* <FontAwesomeIcon icon="fa-light fa-thumbs-up" /> */}
                    <div className={`icons_div ${isHoverd ? 'top' : ''}`}
                    onMouseEnter={()=> setIsHoverd(true)}
                    onMouseLeave={()=> setIsHoverd(false)}
                    >
                        <img className='icons' src={upperLike} onClick={()=>handleChange(upperLike, 'Like')} />
                        <img className='icons' src={heart} onClick={()=>handleChange(heart, 'heart')} />
                        <img src={care} onClick={()=>handleChange(care, 'care')} />
                        <img src={haha} onClick={()=>handleChange(haha, 'haha')} />
                        <img src={wow}  onClick={()=>handleChange(wow, 'wow')}/>
                        <img src={sad}  onClick={()=>handleChange(sad, 'sad')}/>
                        <img src={angry} onClick={()=>handleChange(angry, 'angry')} />
                        
                    </div>
                    <button onClick={()=> {
                        setLike(!like)
                        setSaveImg(null)
                        setSaveImgName(null)
                    }} className={like ? 'liked' : ''}
                    onMouseEnter={()=> setIsHoverd(true)}
                    onMouseLeave={()=> setIsHoverd(false)}
                    >
                    {
                    !like?
                    (<img className={`like_img ${saveImg ? 'new_liked' : ''}`}  src={saveImg ? saveImg : likeIcon}/>)
                    :
                    (<img className={`like_img ${saveImg ? 'new_liked' : 'liked_img'}`} src={saveImg ? saveImg : likedIcon}/>)
                    }
                    {saveImgName ? saveImgName : (!like ? 'Like' : 'Liked')}
                    </button>
                    <button><img className='like_img'  src={comment}/> Comment</button>
                    <button><img className='like_img'  src={share}/> Share</button>
                </div>

                <div className='comment_div'>
                <img src={img} className='logo_img' />
                <input placeholder='Write a public comment...' onChange={inputHandle} className={isClicked ? 'cliked_input' : ''}/>
                </div>
            </div>
        </div>
    );
}

export default FBfeed;