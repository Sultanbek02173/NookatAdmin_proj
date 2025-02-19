import './viewSuggestions.scss'
import { CardComponent } from '../../../features'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMediaNews } from '../../../app/store/reducers/viewSlice'

export const ViewSuggestions = () => {
    
    const dispatch = useDispatch()
    const { card } = useSelector((state) => state.card)
    useEffect(() => {
        dispatch(fetchMediaNews())
    }, [dispatch])
    
    return (
        <div className='container'>
            <div className="viewing">
                <h1 className="viewing-text">предлагаем к просмотру</h1>
                {
                    card.map((item) => (
                        <div key={item.id}>
                           <CardComponent image={item.image_media} date={item.date_media} title={item.title_media} description={item.description_media}/>
                        </div>
                    ))  
               }
            </div>
        </div>
    );
}


