import PageHero from '../components/PageHero'
import TeamCard from '../components/TeamCard'
import teamBanner from '../assets/Banner.png'
import photo1 from '../assets/Photo.jpg'
import photo2 from '../assets/Photo (1).jpg'
import photo3 from '../assets/Photo (2).jpg'
import photo4 from '../assets/Photo (3).jpg'
import photo5 from '../assets/Photo (4).jpg'
import photo6 from '../assets/Photo.jpg'

const teamMembers = [
  { id: 1, name: 'Giovani Bacardo', role: 'Farmer', photo: photo1, socials: ['facebook', 'twitter'] },
  { id: 2, name: 'Marianne Loreno', role: 'Designer', photo: photo2, socials: ['instagram', 'facebook', 'twitter'] },
  { id: 3, name: 'Riga Pelore', role: 'Farmer', photo: photo3, socials: ['facebook', 'twitter'] },
  { id: 4, name: 'Sara Keightley', role: 'Farmer', photo: photo4, socials: ['facebook', 'twitter'] },
  { id: 5, name: 'Scott Lawrence', role: 'Designer', photo: photo5, socials: ['instagram', 'facebook', 'twitter'] },
  { id: 6, name: 'Karen Allen', role: 'Farmer', photo: photo6, socials: ['facebook', 'twitter'] },
]

const Team = () => {
  return (
    <div className="bg-[#f5fbf9]">
      <PageHero image={teamBanner} title="Our Team" />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-base text-[#7eb693] italic mb-2">Team</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#274c5b] mb-4">
              Our Organic Experts
            </h2>
            <p className="text-sm text-[#525c60] leading-relaxed">
              Simply dummy text of the printing and typesetting industry. Lorem had ceased to been
              the industry's standard dummy text ever since the 1500s, when an unknown printer took
              a galley.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
