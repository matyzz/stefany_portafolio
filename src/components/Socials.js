import React, { useContext } from 'react';
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaYoutube } from 'react-icons/fa';
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const socials = [
    {
      name: 'Facebook',
      url: 'http://www.facebook.com',
      icon: FaFacebook,
    },
    {
      name: 'Twitter',
      url: 'http://www.twitter.com',
      icon: FaTwitter,
    },
    {
      name: 'Pinterest',
      url: 'http://www.pinterest.com',
      icon: FaPinterest,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/stefybustamanteph/',
      icon: FaInstagram,
    },
    {
      name: 'YouTube',
      url: 'http://www.youtube.com',
      icon: FaYoutube,
    },
  ];

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-4'>
        {socials.map(({ name, url, icon: Icon }) => (
          <li key={name}>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Enlace a ${name}`}
            >
              <Icon />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;

