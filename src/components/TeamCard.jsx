import instaIcon from '../assets/Insta.png'
import fbIcon from '../assets/Fb.png'
import twitterIcon from '../assets/Twiter.png'

const TeamCard = ({ photo, name, role, socials }) => {
  return (
    <div className="bg-transparent">
      <div className="rounded-[24px] overflow-hidden">
        <img src={photo} alt={name} className="w-full h-[300px] object-cover object-top" />
      </div>
      <div className="bg-white rounded-[24px] px-5 py-4 mt-[-18px] mx-2 shadow-md flex items-center justify-between">
        <div>
          <p className="text-base font-bold text-[#274c5b]">{name}</p>
          <p className="mt-1 text-xs font-semibold text-[#7eb693] italic">{role}</p>
        </div>
        <div className="flex items-center gap-2">
          {socials.includes('instagram') && (
            <img src={instaIcon} alt="Instagram" className="w-4 h-4 object-contain" />
          )}
          {socials.includes('facebook') && (
            <img src={fbIcon} alt="Facebook" className="w-4 h-4 object-contain" />
          )}
          {socials.includes('twitter') && (
            <img src={twitterIcon} alt="Twitter" className="w-4 h-4 object-contain" />
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamCard
