const authorName = 'Eduardo Chavez Barreto'

const Avatar = () => {
  return (
    <div className="flex items-center">
      <img src="/assets/img/author.jpg" className="w-12 h-12 rounded-full mr-4" alt={authorName} />
      <div className="text-xl font-bold">{authorName}</div>
    </div>
  )
}

export default Avatar
