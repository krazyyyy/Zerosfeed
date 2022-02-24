
import boto3



import boto3
import json
def getTable(tb):
    client = boto3.client(
        'dynamodb',
        region_name='us-east-1',
        aws_access_key_id='AKIA2YJIP4F55HKOOGEJ',
        aws_secret_access_key='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',
        )
    dynamodb = boto3.resource(
        'dynamodb',
        region_name='us-east-1',
        aws_access_key_id='AKIA2YJIP4F55HKOOGEJ',
        aws_secret_access_key='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',
        )

    table = dynamodb.Table(tb)

    response = table.scan()
    result = response['Items']
    print(json.loads(json.dumps(result)))
    return result

getTable('Commodities')


# ddb_exceptions = client.exceptions
# print(ddb_exceptions)