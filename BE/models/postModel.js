module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        article_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        author_id: DataTypes.INTEGER,
        thumbnail: DataTypes.String,
        created_at: DataTypes.DATE,
        views: DataTypes.INTEGER,
        likes: DataTypes.INTEGER
    }, {
        tableName: 'articles',
        timestamps: false
    });
    return Post;
}