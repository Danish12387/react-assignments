import FbImageLibrary from 'react-fb-image-grid';
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import '../../css/all.min.css';
import '../../css/fontawesome.min.css';

function FBfeed(props) {
    const [like, setLike] = useState(false);

    return (
        <div>
            <div className='main_div'>
                <div>

                    <div className='title_div'>
                        <img src={props.img} className='logo_img' />
                        <h4 className='neither title'>{props.title}</h4>
                    </div>
                    <h4 className='neither description'>{props.description}.</h4>
                </div>

                <div className='img_library'>
                    <FbImageLibrary images={props.image} />
                </div>
                <div className='bottom_div'>
                    {/* <FontAwesomeIcon icon="fa-light fa-thumbs-up" /> */}
                    <button onClick={()=> setLike(!like)} className={like ? 'liked' : ''}><i class="fa-light fa-thumbs-up"></i> Like</button>
                    <button><i class="fa-light fa-comment"></i> Comment</button>
                    <button><i class="fa-light fa-share"></i> Share</button>
                </div>

                <div className='comment_div'>
                <img src={props.img} className='logo_img' />
                <input placeholder='Write a public comment...'/>
                </div>
            </div>
        </div>
    );
}

export default FBfeed;