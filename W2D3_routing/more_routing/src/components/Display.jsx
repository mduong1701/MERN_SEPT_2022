import React from 'react'

const Display = ({heroes}) => {
  return (
    <div>
        {
        heroes.map((hero, idx) => {
          return (
            <div key={idx}>
              <p>
                {hero.name} has {hero.powerLevel}
              </p>
                <img src={hero.image} alt="" width="200"/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Display