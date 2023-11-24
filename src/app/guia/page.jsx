'use client'

import { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

import styles from '@/styles/pages/guide.module.scss'

import { FiSearch } from 'react-icons/fi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { TextInput } from '@/components'

export default function GuidePage() {
  const [guideData, setGuideData] = useState([])
  const [guideImageData, setGuideImageData] = useState('')
  const [guideDataLoading, setGuideDataLoading] = useState(false)

  const [guideSearch, setGuideSearch] = useState('')

  const handleChangeGuideSearch = (value) => setGuideSearch(value)

  const handleGetGuideImagesData = async () => {
    const options = {
      method: 'GET',
      url: 'https://muscle-group-image-generator.p.rapidapi.com/getImage',
      params: {
        muscleGroups: 'biceps',
        color: '200,100,80',
        transparentBackground: '0'
      },
      headers: {
        'X-RapidAPI-Key': 'bf1cce914dmsh7fd3064392c50e1p155d93jsn3efce7cff1fe',
        'X-RapidAPI-Host': 'muscle-group-image-generator.p.rapidapi.com'
      },
      responseType: 'arraybuffer'
    }

    try {
      const response = await axios.request(options)
      const imageFile = new Blob([response.data])
      const imageUrl = URL.createObjectURL(imageFile)

      setGuideImageData(imageUrl)
    } catch (error) {
      console.error(error)
    }
  }

  const handleGetGuideData = async () => {
    const options = {
      method: 'GET',
      url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
      params: { muscle: 'biceps' },
      headers: {
        'X-RapidAPI-Key': 'bf1cce914dmsh7fd3064392c50e1p155d93jsn3efce7cff1fe',
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    }

    try {
      setGuideDataLoading(true)

      const response = await axios.request(options)
      await handleGetGuideImagesData()

      setGuideData(response.data)
    } catch (error) {
      setGuideData([])
      console.error(error)
    } finally {
      setGuideDataLoading(false)
    }
  }

  useEffect(() => {
    handleGetGuideData()
  }, [])

  const filteredGuide = useMemo(() => {
    if (!guideData) return []
    if (!guideSearch) return guideData

    return guideData.filter((guide) => {
      const objectAsString = JSON.stringify(guide).toLowerCase()
      return objectAsString.includes(guideSearch.toLowerCase())
    })
  }, [guideData, guideSearch])

  return (
    <main className={styles.guide_page}>
      <div className={styles.guide_container}>
        <div className={styles.guide_container_header}>
          <span>
            <FiSearch />
          </span>
          <TextInput
            value={guideSearch}
            onChange={handleChangeGuideSearch}
            placeholder="Pesquise um guia aqui ..."
          />
        </div>
        {guideDataLoading ? (
          <div className={styles.guide_container_loading}>
            <div className={styles.guide_loading}>
              <p>Carregando</p>
              <AiOutlineLoading3Quarters />
            </div>
          </div>
        ) : (
          <div className={styles.guide_container_list}>
            {filteredGuide?.map((guide) => (
              <div className={styles.guide_item} key={guide.name}>
                <div className={styles.guide_item__image}>
                  <img src={guideImageData} alt="" />
                </div>
                <div className={styles.guide_item__details}>
                  <span>
                    <p>Nome</p>
                    <b>{guide.name}</b>
                  </span>
                  <span>
                    <p>Dificuldade</p>
                    <b>{guide.difficulty}</b>
                  </span>
                  <span>
                    <p>Equipamento</p>
                    <b>{guide.equipment}</b>
                  </span>
                  <span>
                    <p>Músculo</p>
                    <b>{guide.muscle}</b>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
