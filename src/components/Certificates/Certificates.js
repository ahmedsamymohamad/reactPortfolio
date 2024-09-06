import uniqid from 'uniqid'
import { certificates } from '../../portfolio'
import './Certificates.css'

function Certificates() {
  if (!certificates.length) return null

  return (
    <section className='section certificate' id='certificates'>
      <h2 className='section__title'>Certificates</h2>
      <ul className='certificates__list'>
        {certificates.map((certificate) => (
            <li className='certificate__item'>
                <div className='date'>
                    {certificate.date}
                </div>
                {
                    certificate.url?
                    <a className='link' href={certificate.url}>
                        <p key={uniqid()} className='title'>
                            {certificate.title}
                        </p>
                        <p key={uniqid()} className='organization'>
                        {certificate.organization}
                        </p>
                    </a>:
                    <div>
                        <p key={uniqid()} className='title'>
                            {certificate.title}
                        </p>
                        <p key={uniqid()} className='organization'>
                        {certificate.organization}
                        </p>
                </div>
                }
                
            </li>
        ))}
      </ul>
    </section>
  )
}

export default Certificates
