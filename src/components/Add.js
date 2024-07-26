import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Add() {
    const formik = useFormik({
        initialValues: {
            name: '',
            description: '',
            releaseDate: '',
            version: '',
            ratings: '',
            genre: '',      
            category: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().min(5, 'Name must be at least 5 characters').required('Name is required'),
            ratings: Yup.number().min(0, 'Ratings must be greater than or equal to 0').max(5, 'Ratings must be less than or equal to 5').required('Ratings is required'),
            version: Yup.string().required('Version is required'),
            genre: Yup.string().required('Genre is required'),
            category: Yup.string().required('Category is required')
        }),
        onSubmit: (values, { setSubmitting, resetForm, setStatus }) => {
            axios.post('http://localhost:4300/applications', values)
                .then(response => {
                    setStatus('success');
                    resetForm();
                })
                .catch(error => {
                    setStatus('error');
                })
                .finally(() => {
                    setSubmitting(false);
                });
        },
    });

    return (
        <div className="h-100 p-5 text-bg-secondary">
            <div className='container mt-4'>
                <h2>Add Application</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'>Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                            data-testid="name"
                        />
                        {formik.touched.name && formik.errors.name && <div className='text-danger'>{formik.errors.name}</div>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='description' className='form-label'>Description</label>
                        <input
                            id="description"
                            name="description"
                            type="text"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.description}
                            data-testid="description"
                        />
                        {formik.touched.description && formik.errors.description && <div className='text-danger'>{formik.errors.description}</div>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='releaseDate' className='form-label'>Release Date</label>
                        <input
                            id="releaseDate"
                            name="releaseDate"
                            type="date"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.releaseDate}
                            data-testid="releaseDate"
                        />
                        {formik.touched.releaseDate && formik.errors.releaseDate && <div className='text-danger'>{formik.errors.releaseDate}</div>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='version' className='form-label'>Version</label>
                        <input
                            id="version"
                            name="version"
                            type="text"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.version}
                            data-testid="version"
                        />
                        {formik.touched.version && formik.errors.version && <div className='text-danger'>{formik.errors.version}</div>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='ratings' className='form-label'>Ratings</label>
                        <input
                            id="ratings"
                            name="ratings"
                            type="number"
                            step="0.1"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.ratings}
                            data-testid="ratings"
                        />
                        {formik.touched.ratings && formik.errors.ratings && <div className='text-danger'>{formik.errors.ratings}</div>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='genre' className='form-label'>Genre</label>
                        <input
                            id="genre"
                            name="genre"
                            type="text"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.genre}
                            data-testid="genre"
                        />
                        {formik.touched.genre && formik.errors.genre && <div className='text-danger'>{formik.errors.genre}</div>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='category' className='form-label'>Category</label>
                        <input
                            id="category"
                            name="category"
                            type="text"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.category}
                            data-testid="category"
                        />
                        {formik.touched.category && formik.errors.category && <div className='text-danger'>{formik.errors.category}</div>}
                    </div>

                    <button type='submit' className='btn btn-primary' disabled={formik.isSubmitting}>
                        Add
                    </button>

                    {formik.status && formik.status === 'success' && (
                        <span data-testid='response' className='text-success'>Success</span>
                    )}

                    {formik.status && formik.status === 'error' && (
                        <span data-testid='response' className='text-danger'>Error</span>
                    )}

                </form>
            </div>
        </div>
    );
}

export default Add;