import './viewSuggestions.scss'
import { CardComponent, MobilCardComponent } from '../../../features'
import { useMediaQuery } from 'usehooks-ts'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMediaNews } from '../../../app/store/reducers/viewSlice'

export const ViewSuggestions = () => {
    
    const dispatch = useDispatch()
    const { card } = useSelector((state) => state.card)
    useEffect(() => {
        dispatch(fetchMediaNews())
    }, [dispatch])
    const matches = useMediaQuery('(max-width: 576px)')
    
    return (
        <div className='container'>
            <div className="viewing">
                <h1 className="viewing-text">предлагаем к просмотру</h1>
                {
                    card.map((item) => (
                        <div key={item.id}>
                            {matches ? <MobilCardComponent image={item.image_media} date={item.date_media} title={item.title_media} description={item.description_media}/>  
                                : <CardComponent image={item.image_media} date={item.date_media} title={item.title_media} description={item.description_media}/>}
                        </div>
                    ))  
               }
            </div>
        </div>
    );
}


