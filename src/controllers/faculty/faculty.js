import { getFacultyById, getSortedFaculty, facultySortFields } from '../../models/faculty/faculty.js';

// Route handler for the faculty list page
const facultyListPage = (req, res) => {
    // Use the requested sort only if it is valid, otherwise default to 'name'
    const currentSort = facultySortFields.includes(req.query.sort) ? req.query.sort : 'name';
    const facultyList = getSortedFaculty(currentSort);

    res.render('faculty/list', {
        title: 'Faculty Directory',
        faculty: facultyList,
        currentSort
    });
};

// Route handler for individual faculty detail pages
const facultyDetailPage = (req, res, next) => {
    const facultyId = req.params.facultyId;
    const member = getFacultyById(facultyId);

    // If faculty member doesn't exist, create 404 error
    if (!member) {
        const err = new Error(`Faculty member ${facultyId} not found`);
        err.status = 404;
        return next(err);
    }

    res.render('faculty/detail', {
        title: member.name,
        member
    });
};

export { facultyListPage, facultyDetailPage };
