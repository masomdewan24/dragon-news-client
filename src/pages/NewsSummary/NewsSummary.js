import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummary = ({ news }) => {
    console.log(news)
    const { _id, title, details, image_url, author, rating, total_view} = news;
    return (
        <Card className=" mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-between'>
                    <Image src={author?.img} roundedCircle
                        style={{ height: '60px' }}
                        className='me-3'
                    />
                    <div>
                        <p className='mb-0'>{author.name}</p>
                        <p>{ author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaBookmark className='me-2'></FaBookmark>
                    <FaShareAlt></FaShareAlt>

                </div>
        </Card.Header>
        <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
          <Card.Text>
                    {details.length > 250 ? 
                        <p>{details.slice(0, 250) + '...'}
                        <Link to={`/news/${_id}`}>Read More</Link></p> :
                        <p>{details}</p>
                        
        }
          </Card.Text>
        
        </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between">
                <div>
                    <FaStar className='me-2 text-warning'></FaStar>
                    {rating?.number}
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    {total_view}
                </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsSummary;