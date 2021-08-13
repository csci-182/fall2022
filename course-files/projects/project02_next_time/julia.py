from apis import yelp

categories_list = []
sort = 'best_match'

    
print('Retrieve matching restaurants...')
print(categories_list)
#opt = input('Input an optional term')
businesses = yelp.get_businesses(categories =','.join(categories_list),
    term = None,
    sort_by = sort
)
yelp.print_formatted_businesses_table(
    businesses = businesses,
    columns=['name', 'display_address', 'rating', 'review_count','categories']
)

while True:
    selection = input('Which restaurant do you want to learn more about (1-10)? ')
    selection = int(selection) - 1
    
    restaurant_id = businesses[selection].get('id')
    
    reviews = yelp.get_reviews(restaurant_id)
    
    print('Reviews:')
    for review in reviews:
        print(review.get('rating'), '-', review.get('text'))